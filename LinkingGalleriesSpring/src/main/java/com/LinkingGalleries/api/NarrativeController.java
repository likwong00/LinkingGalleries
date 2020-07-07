package com.LinkingGalleries.api;

import com.LinkingGalleries.model.Narrative;
import com.LinkingGalleries.service.DBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("api/narrative")
@RestController
public class NarrativeController {

    private final DBService service;

    @Autowired
    public NarrativeController(DBService service) {
        this.service = service;
    }

    @PostMapping
    public void addNarrative(@Valid @NonNull @RequestBody Narrative narrative) {
        service.addNarrative(narrative);
    }

    @GetMapping
    public List<Narrative> getAllNarratives() {
        return service.getAllNarratives();
    }

    @GetMapping(path = "/getByEcatalogKey/{key}")
    public List<Narrative> getNarrativesByEcatalogKey(@PathVariable("key") int ecatalogKey) {
        return service.getNarrativesByEcatalogKey(ecatalogKey);
    }

    @GetMapping(path = "/byKeyAndTitle/{key}/{title}")
    public Narrative getNarrativeByEcatalogKeyAndTitle(@PathVariable("key") int ecatalogKey, @PathVariable("title") String title) {
        return service.getNarrativeByEcatalogKeyAndTitle(ecatalogKey, title);
    }

    @DeleteMapping(path = "/byKeyAndTitle/{key}/{title}")
    public void deleteNarrative(@PathVariable("key") int ecatalogKey, @PathVariable("title") String title) {
        service.deleteNarrativeByEcatalogKeyAndTitle(ecatalogKey, title);
    }

}