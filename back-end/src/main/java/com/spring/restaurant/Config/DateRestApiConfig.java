package com.spring.restaurant.Config;

import com.spring.restaurant.model.Category;
import com.spring.restaurant.model.Order;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class DateRestApiConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        HttpMethod[] prevetMethod={HttpMethod.GET,HttpMethod.POST,HttpMethod.PUT,HttpMethod.DELETE};
        desable(Category.class,config,prevetMethod);
        desable(Order.class,config,prevetMethod);

        /*
        config.getExposureConfiguration().forDomainType(Category.class)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(prevetMethod)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(prevetMethod)));



        config.getExposureConfiguration().forDomainType(Order.class)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(prevetMethod)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(prevetMethod)));

         */

    }

    private void desable(Class theclass, RepositoryRestConfiguration config, HttpMethod[] unsport){
        config.getExposureConfiguration()
                .forDomainType(theclass)
                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(unsport)))
                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(unsport)));

    }
}
