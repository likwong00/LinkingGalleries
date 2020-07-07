package com.LinkingGalleries.dao;

import com.LinkingGalleries.model.Narrative;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NarrativeDao extends JpaRepository<Narrative, Integer> {

    List<Narrative> findByEcatalogKey(int ecatalogKey);

    Narrative findByEcatalogKeyAndTitle(int ecatalogKey, String title);

    void deleteByEcatalogKey(int ecatalogKey);

    void deleteByEcatalogKeyAndTitle(int ecatalogKey, String title);

}
