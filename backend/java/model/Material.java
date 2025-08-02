package backend.java.model;

public class Material {
    private Long id;
    private String name;
    private String description;
    private String density;
    private String tensileStrength;
    private String elasticModulus;
    private String price;

    // Konstruktor
    public Material() {}

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
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
}