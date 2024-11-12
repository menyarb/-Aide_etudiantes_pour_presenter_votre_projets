package com.chaj3ni.chaj3ni.RestControllers;


import com.chaj3ni.chaj3ni.Dto.FileDto;
import com.chaj3ni.chaj3ni.entites.Categorie;

import com.chaj3ni.chaj3ni.RestControllers.service.CategorieService;
import com.chaj3ni.chaj3ni.RestControllers.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/categorie")
public class CategorieRestController {
    //crud
    @Autowired
    CategorieService categorieService;
    @Autowired
    FileService fileService;
    //POST=ajoute
    //put=modifer
    //DELETE=supp
    //GET=affiche
    @RequestMapping(method = RequestMethod.POST)
    public Categorie ajouterCategorie (@RequestBody Categorie categorie){

        return categorieService.ajouterCategorie(categorie);

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
    public Categorie modifierCategorie (@RequestBody Categorie categorie){
        return categorieService.modifierCategorie(categorie);}

    @RequestMapping(value ="/{id}",method = RequestMethod.DELETE)
    public void supprimerCategorie(@PathVariable("id") Long id)
    {
        categorieService.suppeimerCategoriebyId(id);
    }
    @RequestMapping(value ="/{id}",method = RequestMethod.GET)
    public Categorie getById(@PathVariable("id") Long id)
    {
        return categorieService.getCategorieById(id);
    }
    @RequestMapping(method = RequestMethod.GET)
    public List<Categorie> afficherAdmin(){
        return categorieService.listCategories();}
}
