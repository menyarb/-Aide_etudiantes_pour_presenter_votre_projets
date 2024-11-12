package com.chaj3ni.chaj3ni.Dto;

import com.chaj3ni.chaj3ni.entites.Categorie;
import org.springframework.web.multipart.MultipartFile;

public class FileDto {
    private String fileUrl ;

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }
}
