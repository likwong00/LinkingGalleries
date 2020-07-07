package com.LinkingGalleries.model;

import java.io.Serializable;

public class NarrativeID implements Serializable {

    private int ecatalogKey;
    private String title;

    public NarrativeID(int ecatalogKey, String title) {
        this.ecatalogKey = ecatalogKey;
        this.title = title;
    }

    public NarrativeID() {
        this.ecatalogKey = -1;
        this.title = "";
    }

    public int getEcatalogKey() {
        return ecatalogKey;
    }

    public String getTitle() {
        return title;
    }
}
