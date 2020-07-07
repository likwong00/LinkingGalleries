package com.LinkingGalleries.api;

import com.LinkingGalleries.model.Region;
import com.LinkingGalleries.service.DBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("api/region")
@RestController
public class RegionController {

    private final DBService service;

    @Autowired
    public RegionController(DBService service) {
        this.service = service;
    }

    @PostMapping
    public void addRegion(@Valid @NonNull @RequestBody Region region) {
        service.addRegion(region);
    }

    @GetMapping
    public List<Region> getAllRegions() {
        return service.getAllRegions();
    }

    @GetMapping(path = "/byID/{region_id}")
    public Region getRegionByID(@PathVariable("region_id") int regionID) {
        return service.getRegionByID(regionID);
    }

    @DeleteMapping(path = "/byID/{region_id}")
    public void deleteRegion(@PathVariable("region_id") int regionID) {
        service.deleteRegionByID(regionID);
    }

}