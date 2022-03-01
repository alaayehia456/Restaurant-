package com.spring.restaurant.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class caregory_order extends BaseEntity{
    @Column
    private String name;

    @Column
    @CreationTimestamp
    private Date Datecreat;

    @Column
    @UpdateTimestamp
    private Date DateUpdate;



}
