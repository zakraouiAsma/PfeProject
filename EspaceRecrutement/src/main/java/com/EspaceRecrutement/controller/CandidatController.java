package com.EspaceRecrutement.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EspaceRecrutement.Exception.RessourceNotFoundException;
import com.EspaceRecrutement.dao.CandidatDAO;
import com.EspaceRecrutement.dao.PersonneDAO;
import com.EspaceRecrutement.metier.Candidat;
import com.EspaceRecrutement.metier.Personne;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Candidat/app")
public class CandidatController {
	@Autowired
	private CandidatDAO  candidatRep;
	
	//get all personne
    @GetMapping("/candidats")
	public List<Candidat> getAllPersonne(){
		return candidatRep.findAll();
	}
    //create personne rest api 
    @PostMapping("/candidats")
    public Candidat createCandidat(@RequestBody Candidat candidat) {
    return candidatRep.save(candidat);
    }
    //get personne ById
    @GetMapping("/candidat/{id}")
    public  ResponseEntity<Candidat>getCandidatById( @PathVariable Long id ) {
    	Candidat candidat =candidatRep.findById(id).orElseThrow(() -> new RessourceNotFoundException("Candidat not existe with id:"+id));
    	return ResponseEntity.ok(candidat);
    }
    @PutMapping("/candidat")
    public  ResponseEntity<Candidat> updateCandidat( @RequestBody Candidat CandidatDetails ){


    	Candidat candidat =candidatRep.findById(CandidatDetails.getIdCandidat()).orElseThrow(() -> new RessourceNotFoundException("personne not existe with id:"+CandidatDetails.getIdCandidat()));
		return null;
    	
    	
    	
    }
   
    	
   
    
}
