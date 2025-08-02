import backend.model.Material;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MaterialController {
    @GetMapping("/materials")
    public List<Material> getAllMaterials() {
        return new ArrayList<Material>();
    }
}