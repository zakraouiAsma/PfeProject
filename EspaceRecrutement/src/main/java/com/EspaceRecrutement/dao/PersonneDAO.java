package com.EspaceRecrutement.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EspaceRecrutement.metier.Personne;


public interface PersonneDAO  extends JpaRepository<Personne,Long>{

	Personne getById(Long id);

	static Personne save(String personneJson) {
		// TODO Auto-generated method stub
		return null;
	}
	Optional<Personne> findByLogin(String login);
	Boolean existsByLogin(String login);
	Boolean existsByEmail(String email);

	

}
