package models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;

@Entity(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;
    @Column
    private int noOfDirectDebits;

    @Column
    private int balance; //find correct data type for currency

    @OneToMany(mappedBy = "users")
    @JsonIgnoreProperties({"users"})
    private ArrayList<models.Reward> listOfRewards;

    @Column
    private int totalRewardBalance;

    User(Long id, String name) {
        this.id = id;
        this.noOfDirectDebits = 0;
        this.name = name;
        this.balance = 0;
        this.listOfRewards = new ArrayList<models.Reward>();
        this.totalRewardBalance = 0;
    }

    User(){};

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNoOfDirectDebits() {
        return noOfDirectDebits;
    }

    public void setNoOfDirectDebits(int noOfDirectDebits) {
        this.noOfDirectDebits = noOfDirectDebits;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public ArrayList<models.Reward> getListOfRewards() {
        return listOfRewards;
    }

    public void setListOfRewards(ArrayList<models.Reward> listOfRewards) {
        this.listOfRewards = listOfRewards;
    }

    public int getTotalRewardBalance() {
        return totalRewardBalance;
    }

    public void setTotalRewardBalance(int totalRewardBalance) {
        this.totalRewardBalance = totalRewardBalance;
    }
}

