package com.LinkingGalleries.service;

import com.LinkingGalleries.dao.*;
import com.LinkingGalleries.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class DBService {

    private final EcatalogObjectDao ecatalogObjectDao;
    private final NarrativeDao narrativeDao;
    private final RegionDao regionDao;

    @Autowired
    public DBService(EcatalogObjectDao ecatalogObjectDao, NarrativeDao narrativeDao, RegionDao regionDao) {
        this.ecatalogObjectDao = ecatalogObjectDao;
        this.narrativeDao = narrativeDao;
        this.regionDao = regionDao;
    }

    // Ecatalog Objects
    public void addEcatalogObject(EcatalogObject object) {
        ecatalogObjectDao.saveAndFlush(object);
    }

    public List<EcatalogObject> getAllEcatalogObjects() {
        return ecatalogObjectDao.findAll();
    }

    public EcatalogObject getEcatalogObjectByID(int ecatalogKey) {
        return ecatalogObjectDao.findById(ecatalogKey).orElse(null);
    }

    public List<EcatalogObject> getEcatalogObjectsFromRegion(int regionID) {
        return ecatalogObjectDao.findByRegionID(regionID);
    }

    @Transactional
    public void deleteEcatalogObjectByID(int ecatalogKey) {
        deleteNarrativesByEcatalogKey(ecatalogKey);
        ecatalogObjectDao.deleteById(ecatalogKey);
    }

    public void deleteEcatalogObjectByRegion(int regionID) {
        List<EcatalogObject> objects = getEcatalogObjectsFromRegion(regionID);

        for (EcatalogObject object : objects) {
            deleteNarrativesByEcatalogKey(object.getEcatalogKey());
            deleteEcatalogObjectByID(object.getEcatalogKey());
        }
    }

    // Ecatalog Objects Info
    public List<EcatalogObjectInfo> getAllEcatalogObjectsInfo() {
        List<EcatalogObject> ecatalogObjects = getAllEcatalogObjects();
        List<EcatalogObjectInfo> ecatalogObjectInfos = new ArrayList();

        for (EcatalogObject ecatalogObject : ecatalogObjects) {
            String regionName = getRegionByID(ecatalogObject.getRegionID()).getRegionName();
            EcatalogObjectInfo objectInfo = new EcatalogObjectInfo(ecatalogObject, regionName);

            ecatalogObjectInfos.add(objectInfo);
        }

        return ecatalogObjectInfos;
    }

    public EcatalogObjectInfo getEcatalogObjectInfoByKey(int ecatalogKey) {
        EcatalogObject object = getEcatalogObjectByID(ecatalogKey);
        String regionName = getRegionByID(object.getRegionID()).getRegionName();

        EcatalogObjectInfo objectInfo = new EcatalogObjectInfo(object, regionName);

        return objectInfo;
    }

    // Returns the image url of an object
    public String getEcatalogImage(int ecatalogKey) {
        if (ecatalogObjectDao.existsById(ecatalogKey)) {
            EcatalogObject object = getEcatalogObjectByID(ecatalogKey);
            int imageID = object.getImageID();
            String url = "http://museums.bristol.gov.uk/multimedia/entry.php?request=resource&irn=" + imageID + "&format=jpeg";
            return url;
        } else {
            return "Invalid Key";
        }
    }

    // Regions
    public void addRegion(Region region) {
        regionDao.saveAndFlush(region);
    }

    public List<Region> getAllRegions() {
        return regionDao.findAll();
    }

    public Region getRegionByID(int regionID) {
        return regionDao.findById(regionID).orElse(null);
    }

    public void deleteRegionByID(int regionID) {
        deleteEcatalogObjectByRegion(regionID);
        regionDao.deleteById(regionID);
    }

    // Narratives
    public void addNarrative(Narrative narrative) {
        narrativeDao.saveAndFlush(narrative);
    }

    public List<Narrative> getAllNarratives() {
        return narrativeDao.findAll();
    }

    public List<Narrative> getNarrativesByEcatalogKey(int ecatalogKey) {
        return narrativeDao.findByEcatalogKey(ecatalogKey);
    }

    public Narrative getNarrativeByEcatalogKeyAndTitle(int ecatalogKey, String title) {
        return narrativeDao.findByEcatalogKeyAndTitle(ecatalogKey, title);
    }

    public void deleteNarrativesByEcatalogKey(int ecatalogKey) {
        narrativeDao.deleteByEcatalogKey(ecatalogKey);
    }

    @Transactional
    public void deleteNarrativeByEcatalogKeyAndTitle(int ecatalogKey, String title) {
        narrativeDao.deleteByEcatalogKeyAndTitle(ecatalogKey, title);
    }

}
