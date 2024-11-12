package com.chaj3ni.chaj3ni.RestControllers;

import com.chaj3ni.chaj3ni.Dto.FileDto;
import com.chaj3ni.chaj3ni.RestControllers.service.FileService;
import com.chaj3ni.chaj3ni.entites.Admin;
import com.chaj3ni.chaj3ni.entites.Client;
import com.chaj3ni.chaj3ni.RestControllers.service.ClientService;

import com.chaj3ni.chaj3ni.repository.ClientRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/client")
public class ClientRestController {
    private  ClientRepository clientRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    public ClientRestController(ClientRepository clientRepository){
        this.clientRepository=clientRepository;
    }
    //crud




    @Autowired
    ClientService clientService;
    @Autowired
    FileService fileService;

    @RequestMapping(method = RequestMethod.POST)
    public Client ajouterClient (@RequestBody Client client){
        return clientService.ajouterClient(client);}

    @PostMapping(path = "login")
    public ResponseEntity<Map<String, Object>> loginClient(@RequestBody Client client) {

        HashMap<String, Object> response = new HashMap<>();

        Client userFromDB = clientRepository.findByEmail(client.getEmail());
        Client userFromDBP=( clientRepository.findByMdp(client.getMdp()));

        if (userFromDB == null && userFromDBP==null) {
            response.put("message", "Client not found !");
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
    public Client modifierClient (@RequestBody Client client){
        return clientService.modifierClient(client);}

    @RequestMapping(value ="/{id}",method = RequestMethod.GET)
    public Client getById(@PathVariable("id") Long id)
    {
        return clientService.getClientById(id);
    }

    @RequestMapping(value ="/{id}",method = RequestMethod.DELETE)
    public void supprimerClient(@PathVariable("id") Long id)
    {
        clientService.suppeimerClientbyId(id);
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<Client> afficherClient(){
        return clientService.listclients();}
}
