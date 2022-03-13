package com.EspaceRecrutement.metier;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Personne implements Serializable{
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Long id;
	 private String cin;
	private String nom;
	private String prenom;
	private int age;
	private String email;
	private String numeroTelephone;
	private String etatCivil;
	private String login;
	 private String password;
	 private boolean actived;
	 
	public Personne(String cin, String nom, String prenom, int age, String email, String numeroTelephone,
			String etatCivil, String login, String password, boolean actived) {
		super();
		this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.email = email;
		this.numeroTelephone = numeroTelephone;
		this.etatCivil = etatCivil;
		this.login = login;
		this.password = password;
		this.actived = actived;
	}
	public Personne() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNumeroTelephone() {
		return numeroTelephone;
	}
	public void setNumeroTelephone(String numeroTelephone) {
		this.numeroTelephone = numeroTelephone;
	}
	public String getEtatCivil() {
		return etatCivil;
	}
	public void setEtatCivil(String etatCivil) {
		this.etatCivil = etatCivil;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isActived() {
		return actived;
	}
	public void setActived(boolean actived) {
		this.actived = actived;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Personne other = (Personne) obj;
		return Objects.equals(id, other.id);
	}
	@Override
	public String toString() {
		return "Personne [ id="+ id +",cin=" + cin + ", nom=" + nom + ", prenom=" + prenom + ", age=" + age + ", email=" + email
				+ ", numeroTelephone=" + numeroTelephone + ", etatCivil=" + etatCivil + ", login=" + login
				+ ", password=" + password + ", actived=" + actived + "]";
	}
	
		 
}
