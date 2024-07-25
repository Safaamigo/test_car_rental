import React from 'react'
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CarCard from '@/components/Cars/cars-list/CarCard';
import Container from '@mui/material/Container';
import { Add, Padding } from '@mui/icons-material';
import { Button, Grid, IconButton, Input } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';

export const metadata: Metadata = {
    title: "Next.js Calender Page | NextAdmin - Next.js Dashboard Kit",
    description:
      "This is Next.js Calender page for NextAdmin  Tailwind CSS Admin Dashboard Kit",
    // other metadata
  };

const Cars = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Cars" />
            <Container maxWidth="lg" sx={{ bgcolor: '#ffffff', borderRadius:2 }}>
                <Grid container spacing={3} sx={{ flexGrow: 1 }} direction="row"
  justifyContent="space-between"
  alignItems="baseline">
                    <Grid xs={6} md={8.5} sx={{display: 'flex'}}>
                        <Input
                            type="search"
                            placeholder="Search..."
                            startDecorator={
                                
                                <IconButton variant="plain" sx={{borderRadius: 100}}>
                                    <SearchIcon />
                                </IconButton>
                            }
                            sx={{ width: 600,"--Input-focusedThickness": "0px" ,"--Input-radius": "4px","--Input-minHeight": "45px","--Input-decoratorChildHeight": "34px"}}
                        />
                        <span style={{margin:7.5}}> <b>N</b> Results</span>
                    </Grid>
                    <Grid xs={6} md={2.2} sx={{justifyContent:'right'}}>
                        <Button variant="solid" sx={{color:'#003366', backgroundColor:'#FFD800'}} startDecorator={<Add />}>
                            Add New Car
                        </Button>
                    </Grid>
                </Grid>
            <div>
            {[1, 2, 3].map((value) => (
                // eslint-disable-next-line react/jsx-key
                <CarCard />
                ))}
                
            </div>
            </Container>
        
      </div>
    </DefaultLayout>
  )
}

export default Cars
