<script setup>

</script>

<template>
    <v-container max-width = "100%">
        <v-row>
            <v-col>
                <v-carousel cycle>
                    <v-carousel-item src="/banana.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/mango.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/carrot.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/tomato.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

<!-- About Us -->
<v-container class="bg-secondary" max-width = "100%">
    <v-row>
        <v-col class= text-center>
            <div class= "text-display-medium mb-12">Welcome to Smart Mkulima!</div>
            <div class= "text-title-large font-weight-light text-medium-emphasis mb-8 text-white">An online farm guide at the palm of your hand!</div>
            <div class= "text-title-large font-weight-light text-medium-emphasis mb-8 text-white">Discover a world of farm application, knowledge and practices with a wide scope of genres and new insightful content for you and your mind! Explore this new world of specialization with a single tap of your screen!</div>
            <div class= "text-title-large font-weight-light text-medium-emphasis mb-8 text-white">Get empowered with Smart Mkulima!</div>
        </v-col>
    </v-row>
</v-container>

<!-- Samples -->
 <v-row>
<v-col cols="6" md="12" lg="6">
    
        <v-card rounded="xl" elevation="10" class="h-100 d-flex flex-column overflow-hidden category-card">
          <v-img src="/avocado.jpg" height="240" cover />
          <v-card-title>Farm Produce</v-card-title>
          <v-card-subtitle>Helathy Crops From Our Farms</v-card-subtitle>
          <v-card-actions class="pa-4 pt-0 mt-auto">
            <v-btn color="primary" variant="elevated" to="/products">Explore</v-btn>
          </v-card-actions>
        </v-card>
    
</v-col>

<v-col cols="6" md="12" lg="6">
    
    <v-card rounded="xl" elevation="10" class="h-100 d-flex flex-column overflow-hidden category-card">
          <v-img src="" height="240" cover />
          <v-card-title>Dairy Products</v-card-title>
          <v-card-subtitle>Everything From Our Healthy Cows</v-card-subtitle>
          <v-card-actions class="pa-4 pt-0 mt-auto">
            <v-btn color="primary" variant="elevated" to="/products">Explore</v-btn>
          </v-card-actions>
        </v-card>
    
</v-col>
</v-row>


<!-- Footer -->
    <v-container class="bg-primary" max-width="100%">
     <v-row>
        <v-col>
            <div align="center">
                <router-link to="/">
                    <v-img src="/logo.png" width="50%" height="50%" ></v-img>
                </router-link>

                <p> Copyright Smart Mkulima &copy; 2026</p>
            </div>
        </v-col>
        <v-col md="4" >
            <div class="text-center">
                <p>Follow us on:</p>
                <v-icon icon="mdi-instagram"></v-icon>
                <v-icon icon="mdi-twitter"></v-icon>
                <v-icon icon="mdi-facebook"></v-icon>
            </div>
        </v-col>
        <v-col md="4">
            <div class="text-center">
                <p>Contact Us: </p>
                <p>Email: info@smartmkulima.com</p>
                <p>Phone: +254712345789</p>
            </div>
        </v-col>
     </v-row>
    </v-container>

</template>