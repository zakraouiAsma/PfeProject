package com.EspaceRecrutement.payload.response;

import java.util.List;

public class JwtResponse {
private String token;
private String  type = "Bearer";
private Long id;
private String login;
private String email;
private List <String> roles;
public JwtResponse(String accessToken, String type, Long id, String login, String email, List<String> roles) {
	super();
	this.token = accessToken;
	this.type = type;
	this.id = id;
	this.login = login;
	this.email = email;
	this.roles = roles;
}

public JwtResponse(Long id, String login, String email, List<String> roles) {
	super();
	this.id = id;
	this.login = login;
	this.email = email;
	this.roles = roles;
}

public JwtResponse(String jwt, Long id, String login, String email, List<String> roles) {
	
	this.id = id;
	this.login = login;
	this.email = email;
	this.roles = roles;
}


public String getAccessToken() {
	return token;
	
}
public void setAccessToken(String accessToken) {
	this.token = accessToken;
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getLogin() {
	return login;
}
public void setLogin(String login) {
	this.login = login;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public List<String> getRoles() {
	return roles;
}
public void setRoles(List<String> roles) {
	this.roles = roles;
}
}
