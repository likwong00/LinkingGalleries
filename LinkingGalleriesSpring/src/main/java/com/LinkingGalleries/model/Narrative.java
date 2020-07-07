package com.LinkingGalleries.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.CodePointLength;
import org.springframework.lang.NonNull;

import javax.persistence.*;

@Entity
@Table(name = "narrative_table")
@IdClass(NarrativeID.class)
public class Narrative {

    @Id
    @NonNull
    @Column(name = "ecatalog_key")
    private final int ecatalogKey;

    @Column(name = "narrative")
    private final String narrative;

    @Id
    @NonNull
    @Column(name = "title")
    private final String title;

    public Narrative(@JsonProperty("ecatalog_key") int ecatalogKey, @JsonProperty("title") String title, @JsonProperty("narrative") String narrative) {
        this.ecatalogKey = ecatalogKey;
        this.narrative = narrative;
        this.title = title;
    }

    public Narrative() {
        this.ecatalogKey = -1;
        this.narrative = "";
        this.title = "";
    }

    public int getEcatalogKey() {
        return ecatalogKey;
    }

    public String getNarrative() {
        return narrative;
    }

    public String getTitle() {
        return title;
    }

}
