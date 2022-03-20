package com.EspaceRecrutement.dao;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;


import com.EspaceRecrutement.metier.Role;



public interface RoleDAO extends JpaRepository<Role, String>{
	 Optional<Role> findByName(String name);
}
