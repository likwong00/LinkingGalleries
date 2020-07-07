package com.LinkingGalleries.dao;

import com.LinkingGalleries.model.EcatalogObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EcatalogObjectDao extends JpaRepository<EcatalogObject, Integer> {

    List<EcatalogObject> findByRegionID(int regionID);

}
