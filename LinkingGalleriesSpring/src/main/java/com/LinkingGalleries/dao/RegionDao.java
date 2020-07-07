package com.LinkingGalleries.dao;

import com.LinkingGalleries.model.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionDao extends JpaRepository<Region, Integer> {
}
