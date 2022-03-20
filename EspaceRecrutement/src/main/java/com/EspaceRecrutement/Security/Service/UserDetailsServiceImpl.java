package com.EspaceRecrutement.Security.Service;

import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


import com.EspaceRecrutement.dao.PersonneDAO;
import com.EspaceRecrutement.metier.Personne;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	 @Autowired
	 PersonneDAO personnedao;

	  @Override
	  @Transactional
	  public UserDetails loadUserByUsername(String login)  throws UsernameNotFoundException {
	    Personne personne = personnedao.findByLogin(login)
	        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + login));

	    return (UserDetails) UserDetailsImpl.build(personne);
	  }
}
