package com.materialdb.controller;

import com.materialdb.model.Material;
import com.materialdb.repository.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MaterialController {

    @Autowired
    private MaterialRepository materialRepository;

    @GetMapping("/materials")
    public List<Material> getAllMaterials() {
        return materialRepository.findAll();
    }
}