package com.LinkingGalleries.model;

public class EcatalogObjectInfo {

    private final int ecatalogKey;
    private final int irn;
    private final String objectNumber;
    private final String physicalDescription;
    private final String preciseLocation;
    private final int imageID;
    private final String name;
    private final double latitude;
    private final double longitude;
    private final int regionID;
    private final String regionName;

    public EcatalogObjectInfo(EcatalogObject object, String regionName) {
        this.ecatalogKey = object.getEcatalogKey();
        this.irn = object.getIrn();
        this.objectNumber = object.getObjectNumber();
        this.physicalDescription = object.getPhysicalDescription();
        this.preciseLocation = object.getPreciseLocation();
        this.imageID = object.getImageID();
        this.name = object.getName();
        this.latitude = object.getLatitude();
        this.longitude = object.getLongitude();
        this.regionID = object.getRegionID();

        this.regionName = regionName;
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

    public int getRegionID() {
        return regionID;
    }

    public String getRegionName() {
        return regionName;
    }


}
