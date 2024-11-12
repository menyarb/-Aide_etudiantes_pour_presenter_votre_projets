package com.chaj3ni.chaj3ni.entites;

import javax.persistence.*;
import java.util.List;

@Entity
public class Role {
    @Id
    //auto incrément
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String roleName;

    @OneToMany(mappedBy = "role")
    private List<User> users;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
