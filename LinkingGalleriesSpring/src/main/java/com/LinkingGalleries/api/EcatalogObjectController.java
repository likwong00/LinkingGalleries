package com.LinkingGalleries.api;

import com.LinkingGalleries.model.EcatalogObject;
import com.LinkingGalleries.model.EcatalogObjectInfo;
import com.LinkingGalleries.service.DBService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("api/ecatalogobject")
@RestController
public class EcatalogObjectController {

    private final DBService service;

    @Autowired
    public EcatalogObjectController(DBService service) {
        this.service = service;
    }

    @PostMapping
    public void addEcatalogObject(@Valid @NonNull @RequestBody EcatalogObject object) {
        service.addEcatalogObject(object);
    }

    @GetMapping
    public List<EcatalogObject> getAllEcatalogObjects() {
        return service.getAllEcatalogObjects();
    }

    @GetMapping(path = "/byKey/{key}")
    public EcatalogObject getEcatalogObjectByKey(@PathVariable("key") int ecatalogKey) {
        return service.getEcatalogObjectByID(ecatalogKey);
    }

    @GetMapping(path = "/byRegion/{regionID}")
    public List<EcatalogObject> getEcatalogObjectsByRegion(@PathVariable("regionID") int regionID) {
        return service.getEcatalogObjectsFromRegion(regionID);
    }

    @DeleteMapping(path = "/byKey/{key}")
    public void deleteEcatalogObjectByKey(@PathVariable("key") int ecatalogKey) {
        service.deleteEcatalogObjectByID(ecatalogKey);
    }

    // Requests for all info about an object
    @GetMapping(path = "/allInfo")
    public List<EcatalogObjectInfo> getAllEcatalogObjectsInfo() {
        return service.getAllEcatalogObjectsInfo();
    }

    @GetMapping(path = "/allInfo/{key}")
    public EcatalogObjectInfo getEcatalogObjectInfoByKey(@PathVariable("key") int ecatalogKey) {
        return service.getEcatalogObjectInfoByKey(ecatalogKey);
    }

    @GetMapping(path = "/getImage/{key}")
    public String getImageURL(@PathVariable("key") int ecatalogKey) {
        return service.getEcatalogImage(ecatalogKey);
    }

}
