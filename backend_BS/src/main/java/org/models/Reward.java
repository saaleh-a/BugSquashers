package models;

public class Reward {

    private String name;
    private int points;

    private boolean isActive;

    private boolean isRedeemed;


    public Reward(int points, boolean isActive, boolean isRedeemed){
        this.points = points;
        this.isActive = isActive;
        this.isRedeemed = isRedeemed;
    }
    public Reward(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public boolean isRedeemed() {
        return isRedeemed;
    }

    public void setRedeemed(boolean redeemed) {
        isRedeemed = redeemed;
    }
}
