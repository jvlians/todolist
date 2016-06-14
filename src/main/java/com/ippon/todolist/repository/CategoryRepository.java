package com.ippon.todolist.repository;

import com.ippon.todolist.domain.Category;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Category entity.
 */
@SuppressWarnings("unused")
public interface CategoryRepository extends JpaRepository<Category,Long> {

    @Query("select category from Category category where category.owner.login = ?#{principal.username}")
    List<Category> findByOwnerIsCurrentUser();

}
