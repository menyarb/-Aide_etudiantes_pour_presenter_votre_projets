package com.chaj3ni.chaj3ni.RestControllers.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileService {
    private static String UPLOAD_DIR = System.getProperty("user.home") + "/test";
    public String uploadFile(MultipartFile file) throws IOException {
        File uploadDir = new File(UPLOAD_DIR);
        uploadDir.mkdirs();
        StringBuilder sb = new StringBuilder();


        if (!file.isEmpty()) {

            String uploadFilePath = UPLOAD_DIR + "/" + file.getOriginalFilename();
            byte[] bytes = file.getBytes();
            Path path = Paths.get(uploadFilePath);
            Files.write(path, bytes);
            sb.append(file.getOriginalFilename());
        }
        //storeUrl+"api/files/downloadFile/"+

         return "http://localhost:9090/api/categorie/downloadFile/"+sb.toString()
                    ;


    }

    public Resource loadFileAsResource(String fileName) throws MalformedURLException {
        Path filePath = Paths.get(UPLOAD_DIR).resolve(fileName).normalize();
        Resource resource = new UrlResource(filePath.toUri());
        if(resource.exists()) {
            return resource;
        }
        return  null;
    }
}
