package com.EspaceRecrutement.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EspaceRecrutement.metier.Candidat;



public interface CandidatDAO extends JpaRepository<Candidat,Long> {

}
