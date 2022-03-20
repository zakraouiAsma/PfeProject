package com.EspaceRecrutement.metier;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import org.springframework.security.core.GrantedAuthority;

@Entity
public class Personne implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 7950217207447904668L;
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
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
	 @ManyToMany(fetch =FetchType.EAGER )
	 private Set<Role> roles = new HashSet<>();
	
/*	public Personne(String cin, String nom, String prenom, int age, String email, String numeroTelephone,
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
	}*/
	public Personne() {
		super();
	}
	

	public Personne(String login, String email, String password) {
		super();
		
		this.login = login;
		this.email = email;
		this.password = password;
	}
	
	public Personne(String login, String password) {
		this.login = login;
		this.password = password;// TODO Auto-generated constructor stub
	}


	


	public Set<Role> getRoles() {
		return roles;
	}
	public void setRoles(Set<Role> roles) {
		this.roles = roles;
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
