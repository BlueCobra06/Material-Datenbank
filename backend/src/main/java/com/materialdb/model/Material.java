package com.materialdb.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "material")
public class Material {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private String density;
    private String tensileStrength;
    private String elasticModulus;
    private String price;
    private String category;
    private String applications;

    // Konstruktor
    public Material() {}

    // Getters & Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String getDensity() { return density; }
    public void setDensity(String density) { this.density = density; }
    
    public String getTensileStrength() { return tensileStrength; }
    public void setTensileStrength(String tensileStrength) { this.tensileStrength = tensileStrength; }
    
    public String getElasticModulus() { return elasticModulus; }
    public void setElasticModulus(String elasticModulus) { this.elasticModulus = elasticModulus; }
    
    public String getPrice() { return price; }
    public void setPrice(String price) { this.price = price; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    public String getApplications() { return applications; }
    public void setApplications(String applications) { this.applications = applications; }
}