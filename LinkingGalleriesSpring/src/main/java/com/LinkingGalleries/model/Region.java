package com.LinkingGalleries.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.lang.NonNull;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "region_table")
public class Region {

    @Id
    @NonNull
    @Column(name = "region_id")
    private final int regionID;

    @Column(name = "name")
    private final String regionName;

    public Region(@JsonProperty("region_id") int regionID, @JsonProperty("region_name") String regionName) {
        this.regionID = regionID;
        this.regionName = regionName;
    }

    public Region() {
        regionID = -1;
        regionName = "";
    }

    public int getRegionID() {
        return regionID;
    }

    public String getRegionName() {
        return regionName;
    }
}
