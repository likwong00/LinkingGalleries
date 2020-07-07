package com.LinkingGalleries.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.lang.NonNull;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ecatalog_table")
public class EcatalogObject {

    @Id
    @NonNull
    @Column(name = "ecatalog_key")
    private final int ecatalogKey;

    @Column(name = "irn")
    private final int irn;

    @Column(name = "object_number")
    private final String objectNumber;

    @Column(name = "physical_description")
    private final String physicalDescription;

    @Column(name = "precise_location")
    private final String preciseLocation;

    @Column(name = "image_id")
    private final int imageID;

    @Column(name = "name")
    private final String name;

    @Column(name = "region_id")
    private final int regionID;

    @Column(name = "latitude")
    private final double latitude;

    @Column(name = "longitude")
    private final double longitude;

    public EcatalogObject(@JsonProperty("ecatalog_key") int ecatalogKey, @JsonProperty("irn") int irn, @JsonProperty("object_number") String objectNumber, @JsonProperty("physical_description") String physicalDescription, @JsonProperty("precise_location") String preciseLocation, @JsonProperty("image_id") int imageID, @JsonProperty("name") String name, @JsonProperty("latitude") double latitude, @JsonProperty("longitude") double longitude, @JsonProperty("region_id") int regionID) {
        this.ecatalogKey = ecatalogKey;
        this.irn = irn;
        this.objectNumber = objectNumber;
        this.physicalDescription = physicalDescription;
        this.preciseLocation = preciseLocation;
        this.imageID = imageID;
        this.name = name;
        this.regionID = regionID;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public EcatalogObject() {
        this.ecatalogKey = -1;
        this.irn = -1;
        this.objectNumber = "";
        this.physicalDescription = "";
        this.preciseLocation = "";
        this.imageID = -1;
        this.name = "";
        this.regionID = -1;
        this.latitude = 0;
        this.longitude = 0;
    }

    public int getEcatalogKey() {
        return ecatalogKey;
    }

    public int getIrn() {
        return irn;
    }

    public String getObjectNumber() {
        return objectNumber;
    }

    public String getPhysicalDescription() {
        return physicalDescription;
    }

    public String getPreciseLocation() {
        return preciseLocation;
    }

    public int getImageID() {
        return imageID;
    }

    public String getName() {
        return name;
    }

    public double getLatitude() {return latitude;}

    public double getLongitude() {return longitude;}

    public int getRegionID() { return regionID; }

}
