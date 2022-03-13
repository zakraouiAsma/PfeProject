package com.EspaceRecrutement;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;


import com.EspaceRecrutement.metier.Personne;

@SpringBootApplication
public class EspaceRecrutementApplication {

	public static void main(String[] args) {
		 ApplicationContext cnt=SpringApplication.run(EspaceRecrutementApplication.class, args);
	
		
	}

}
