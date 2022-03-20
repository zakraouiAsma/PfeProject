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
import com.EspaceRecrutement.dao.PersonneDAO;
import com.EspaceRecrutement.metier.Personne;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/personne/Api")
public class PersonneController {

	@Autowired
	private PersonneDAO personneDAO;
	//get all personne
    @GetMapping("/personnes")
	public List<Personne>getAllPersonne(){
		return personneDAO.findAll();
	}
    //create personne rest api 
    @PostMapping("/personnes")
    public Personne createPersonne(@RequestBody Personne personne) {
    return personneDAO.save(personne);
    }
    //get personne ById
    @GetMapping("/personnes/{id}")
    public  ResponseEntity<Personne>getPersonneById( @PathVariable Long id ) {
    	Personne personne =personneDAO.findById(id).orElseThrow(() -> new RessourceNotFoundException("personne not existe with id:"+id));
    	return ResponseEntity.ok(personne);
    }
    @PutMapping("/personnes")
    public  ResponseEntity<Personne> updatePersonne( @RequestBody Personne personneDetails ){
    	
    	Personne personne =personneDAO.findById(personneDetails.getId()).orElseThrow(() -> new RessourceNotFoundException("personne not existe with id:"+personneDetails.getId()));
    	personne.setCin(personneDetails.getCin());
    	personne.setNom(personneDetails.getNom());
    	personne.setPrenom(personneDetails.getPrenom());
    	personne.setAge(personneDetails.getAge());
    	personne.setEmail(personneDetails.getEmail());
    	personne.setEtatCivil(personneDetails.getEtatCivil());
    	personne.setNumeroTelephone(personneDetails.getNumeroTelephone());
    	personne.setLogin(personneDetails.getLogin());
    	personne.setPassword(personneDetails.getPassword());
    	Personne updatePersonne =personneDAO.save(personne);
    	return ResponseEntity.ok(updatePersonne);
    	
    }
   
    	
   // delete personne 
    @DeleteMapping("/personnes/{id}")
    public ResponseEntity< Map<String,Boolean>>deleteEmployee(@PathVariable Long id){
    	Personne personne =personneDAO.findById(id)
    	.orElseThrow(() -> new RessourceNotFoundException("personne not existe with id:"+id));
		personneDAO.delete(personne);
		Map<String, Boolean> response = new HashMap<>();
	   response.put("deleted",Boolean.TRUE);
	   return ResponseEntity.ok(response);
    	
    }

}
