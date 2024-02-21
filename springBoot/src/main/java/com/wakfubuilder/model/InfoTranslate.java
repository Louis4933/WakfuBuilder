package com.wakfubuilder.model;

public class InfoTranslate {
    
    private String fr;
    private String en;
    private String es;
    private String pt;

    /* Constructors */
    public InfoTranslate() {}

    public InfoTranslate(String fr, String en, String es, String pt) {
        super();
        this.fr = fr;
        this.en = en;
        this.es = es;
        this.pt = pt;
    }

    /* Getters */
    public String getFr() {
        return fr;
    }

    public String getEn() {
        return en;
    }

    public String getEs() {
        return es;
    }

    public String getPt() {
        return pt;
    }

    /* Setters */
    public void setFr(String fr) {
        this.fr = fr;
    }

    public void setEn(String en) {
        this.en = en;
    }

    public void setEs(String es) {
        this.es = es;
    }

    public void setPt(String pt) {
        this.pt = pt;
    }
}
