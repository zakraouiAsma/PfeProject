package com.EspaceRecrutement.metier;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Candidat  implements Serializable{
	@Id
	
	private Long idCandidat;
	private String username;
	private String image;
	private String cv;
	private  Date Date_naissance;
	private String adresse;
	public Candidat(String cin, String nom, String prenom, int age, String email, String numeroTelephone,
			String etatCivil, String login, String password, boolean actived, String username, String image, String cv,
			Date date_naissance, String adresse) {
		super();
		this.username = username;
		this.image = image;
		this.cv = cv;
		Date_naissance = date_naissance;
		this.adresse = adresse;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getCv() {
		return cv;
	}
	public void setCv(String cv) {
		this.cv = cv;
	}
	public Date getDate_naissance() {
		return Date_naissance;
	}
	public void setDate_naissance(Date date_naissance) {
		Date_naissance = date_naissance;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public Candidat(String cin, String nom, String prenom, int age, String email, String numeroTelephone,
			String etatCivil, String login, String password, boolean actived) {

	}
	@Override
	public String toString() {
		return "Candidat [idCandidat=" + idCandidat + ", username=" + username + ", image=" + image + ", cv=" + cv
				+ ", Date_naissance=" + Date_naissance + ", adresse=" + adresse + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + Objects.hash(idCandidat);
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Candidat other = (Candidat) obj;
		return Objects.equals(idCandidat, other.idCandidat);
	}
	public Long getIdCandidat() {
		return idCandidat;
	}
	public void setIdCandidat(Long idCandidat) {
		this.idCandidat = idCandidat;
	}
	
	
	
	
	
}
