package com.materialdb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.materialdb.model.Material;
import com.materialdb.repository.MaterialRepository;

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

    @GetMapping("/materials/{id}")
    public Material getMaterial(@PathVariable Long id) {
        return materialRepository.findById(id).get();
    }

    @PostMapping("/materials/create")
    public Material createMaterial(@RequestBody Material material) {
        return materialRepository.save(material);
    }
}