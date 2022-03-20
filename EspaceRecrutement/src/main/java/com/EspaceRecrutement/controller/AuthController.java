package com.EspaceRecrutement.controller;

import java.util.HashSet;


import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.EspaceRecrutement.dao.PersonneDAO;
import com.EspaceRecrutement.dao.RoleDAO;

import com.EspaceRecrutement.metier.Personne;
import com.EspaceRecrutement.metier.Role;
import com.EspaceRecrutement.Security.Jwt.JwtUtils;
import com.EspaceRecrutement.Security.Service.UserDetailsImpl;
import com.EspaceRecrutement.payload.Request.*;
import com.EspaceRecrutement.payload.response.JwtResponse;
import com.EspaceRecrutement.payload.response.Message;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth/")
public class AuthController {

	@Autowired
	private PersonneDAO personneDAO;
	@Autowired
	private RoleDAO roleDAO;
	 @Autowired
	  PasswordEncoder encoder;

	  @Autowired
	  JwtUtils jwtUtils;
	  @Autowired
	  AuthenticationManager authenticationManager;


	  @PostMapping("/signin")
	  public ResponseEntity<?> authenticateUser(@Valid @RequestBody Login loginRequest) {

	    Authentication authentication = authenticationManager.authenticate(
	        new UsernamePasswordAuthenticationToken(loginRequest.getLogin(), loginRequest.getPassword()));

	    SecurityContextHolder.getContext().setAuthentication(authentication);
	    String jwt = jwtUtils.generateJwtToken(authentication);
	    
	    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();    
	    List<String> roles = userDetails.getAuthorities().stream()
	        .map(item -> item.getAuthority())
	        .collect(Collectors.toList());

	    return ResponseEntity.ok(new JwtResponse(jwt, 
	                         userDetails.getId(), 
	                         userDetails.getUsername(), 
	                         userDetails.getEmail(), 
	                         roles));
	  }
/*
	  @PostMapping("/signup")
	  public ResponseEntity<?> registerUser(@Valid @RequestBody Signup signUpRequest) {
	    if (personneDAO.existsByLogin(signUpRequest.getLogin())) {
	      return ResponseEntity
	          .badRequest()
	          .body(new Message("Error: Username is already taken!"));
	    }

	    if (personneDAO.existsByEmail(signUpRequest.getEmail())) {
	      return ResponseEntity
	          .badRequest()
	          .body(new Message("Error: Email is already in use!"));
	    }

	    // Create new user's account
	    Personne personne = new Personne(signUpRequest.getLogin(), 
	               signUpRequest.getEmail(),
	               encoder.encode(signUpRequest.getPassword()));

	    Set<String> strRoles = signUpRequest.getRole();
	    Set<Role> roles = new HashSet<>();

	    if (strRoles == null) {
	      Role userRole = roleDAO.findByName("ROLE_USER")
	          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	      roles.add(userRole);
	    } else {
	      strRoles.forEach(role -> {
	        switch (role) {
	        case "admin":
	          Role adminRole = roleDAO.findByName("ROLE_ADMIN")
	              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	          roles.add(adminRole);

	          break;
	        case "cand":
	          Role candRole = roleDAO.findByName("ROLE_CANDIDAT")
	              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	          roles.add(candRole);

	          break;
	        default:
	          Role userRole = roleDAO.findByName("ROLE_USER")
	              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	          roles.add(userRole);
	        }
	      });
	    }

	     personne.setRoles(roles);
	     personneDAO.save(personne);

	    return ResponseEntity.ok(new Message("User registered successfully!"));
	  }*/
	  @PostMapping("/signup")
	  public ResponseEntity<?> registerUser(@Valid @RequestBody Signup signUpRequest) {
	    if (personneDAO.existsByLogin(signUpRequest.getLogin())) {
	      return ResponseEntity
	          .badRequest()
	          .body(new Message("Error: Username is already taken!"));
	    }

	    if (personneDAO.existsByEmail(signUpRequest.getEmail())) {
	      return ResponseEntity
	          .badRequest()
	          .body(new Message("Error: Email is already in use!"));
	    }

	    // Create new user's account
	    Personne personne = new Personne(signUpRequest.getLogin(), 
	               signUpRequest.getEmail(),
	               encoder.encode(signUpRequest.getPassword()));

	    Set<String> strRoles = signUpRequest.getRole();
	    Set<Role> roles = new HashSet<>();

	  
	      Role userRole = roleDAO.findByName("ROLE_CANDIDAT")
	          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	      roles.add(userRole);
	  

	     personne.setRoles(roles);
	     personneDAO.save(personne);

	    return ResponseEntity.ok(new Message("User registered successfully!"));
	  }
	  @PostMapping("/signupClient")
	  public ResponseEntity<?> registerClient(@Valid @RequestBody Signup signUpRequest) {
	    if (personneDAO.existsByLogin(signUpRequest.getLogin())) {
	      return ResponseEntity
	          .badRequest()
	          .body(new Message("Error: Username is already taken!"));
	    }

	    if (personneDAO.existsByEmail(signUpRequest.getEmail())) {
	      return ResponseEntity
	          .badRequest()
	          .body(new Message("Error: Email is already in use!"));
	    }

	    // Create new user's account
	    Personne personne = new Personne(signUpRequest.getLogin(), 
	               signUpRequest.getEmail(),
	               encoder.encode(signUpRequest.getPassword()));

	    Set<String> strRoles = signUpRequest.getRole();
	    Set<Role> roles = new HashSet<>();

	  
	      Role userRole = roleDAO.findByName("ROLE_ADMIN")
	          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	      roles.add(userRole);
	  

	     personne.setRoles(roles);
	     personneDAO.save(personne);

	    return ResponseEntity.ok(new Message("User registered successfully!"));
	  }
	
	
}
