package com.chaj3ni.chaj3ni.RestControllers;
import com.chaj3ni.chaj3ni.Dto.FileDto;
import com.chaj3ni.chaj3ni.RestControllers.service.CondidatService;
import com.chaj3ni.chaj3ni.entites.Client;
import com.chaj3ni.chaj3ni.entites.Condidat;
import com.chaj3ni.chaj3ni.repository.CondidatRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.chaj3ni.chaj3ni.RestControllers.service.FileService;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/condidat")
public class CondidatRestController {
    //ta3yet ili methode mat3na
    //crud
    private CondidatRepository condidatRepository;
    public CondidatRestController(CondidatRepository condidatRepository){
        this.condidatRepository=condidatRepository;
    }
    @Autowired
    CondidatService condidatService;
    @Autowired
    FileService fileService;

    @PostMapping(path = "login")
    public ResponseEntity<Map<String, Object>> loginCondidat(@RequestBody Condidat condidat) {

        HashMap<String, Object> response = new HashMap<>();

        Condidat userFromDB = condidatRepository.findByEmail(condidat.getEmail());
        Condidat userFromDBP=( condidatRepository.findByMdp(condidat.getMdp()));

        if (userFromDB == null &&  userFromDBP ==null) {
            response.put("message", "Condidat not found !");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }  else {

            String token = Jwts.builder()
                    .claim("data", userFromDB)
                    .signWith(SignatureAlgorithm.HS256, "SECRET")
                    .compact();
            response.put("token", token);


            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
    }
    @RequestMapping(method = RequestMethod.POST)
    public Condidat ajouterCondidat (@RequestBody Condidat condidat){
        return condidatService.ajouterCondidat(condidat);}

    @RequestMapping(value = "/upload",method = RequestMethod.POST)
    public FileDto uploadeImage (@RequestBody MultipartFile file){
        FileDto fileDto = new FileDto();
        if (file != null && !file.isEmpty()) {
            try {
                fileDto.setFileUrl(fileService.uploadFile(file));
                return fileDto;
            } catch (IOException e) {
                fileDto.setFileUrl("");
                return  fileDto;
            }
        }
        return fileDto;
        // return categorieService.ajouterCategorie(categorieDto.getCategorie());

    }

    @GetMapping("/downloadFile/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) throws MalformedURLException {
        // Load file as Resource
        Resource resource = fileService.loadFileAsResource(fileName);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            //	logger.info("Could not determine file type.");
        }

        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }


    @RequestMapping(method = RequestMethod.PUT)
    public Condidat modifierCondidat (@RequestBody Condidat condidat){
        return condidatService.modifierCondidat(condidat);}

    @RequestMapping(value ="/{id}",method = RequestMethod.GET)
    public Condidat getById(@PathVariable("id") Long id)
    {
        return condidatService.getCondidatById(id);
    }

    @RequestMapping(value ="/{id}",method = RequestMethod.DELETE)
    public void supprimerCondidat(@PathVariable("id") Long id)
    {
        condidatService.suppeimerCondidatbyId(id);
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<Condidat> afficherCondidat(){
        return condidatService.listcondidats();}
}
