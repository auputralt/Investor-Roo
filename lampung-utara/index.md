---
layout: region
title: "Lampung Utara Overview"
subtitle: "Mainland Food & Estate-Crop Hub in Sumatra"
region: "Lampung Utara"
region_slug: "lampung-utara"
region_url: "/lampung-utara/"
commodities_url: "/lampung-utara/commodities/"
programs_url: "/lampung-utara/programs/"
show_quick_nav: true
active_tab: "overview"
permalink: /lampung-utara/
---

<!-- Regional Profile -->
<section class="section-sm">
  <div class="container">
    <div class="grid grid-2">
      <div>
        <h2>Regional Profile</h2>
        
        <h3>Agro-Ecology</h3>
        <ul>
          <li><strong>Elevation:</strong> Medium-elevation area (lowland–mid-upland)</li>
          <li><strong>Climate:</strong> Monsoonal with distinct rainy/dry seasons <span class="data-status confirmed">Confirmed</span></li>
          <li><strong>Rainfall:</strong> Significant variability; affects Robusta coffee production</li>
          <li><strong>Soils:</strong> Suitable for food crops and plantation crops <span class="data-status confirmed">Confirmed</span></li>
        </ul>
        
        <h3>Current Land Use</h3>
        <p>Leading agricultural subsectors in Lampung Utara:</p>
        <ul>
          <li><strong>Food Crops (Tanaman Pangan):</strong> ~35.29% of agricultural GRDP <span class="data-status confirmed">Confirmed</span></li>
          <li><strong>Plantation Crops (Perkebunan):</strong> ~45.24% of agricultural GRDP <span class="data-status confirmed">Confirmed</span></li>
        </ul>
      </div>
      
      <div>
        <!-- GRDP Chart -->
        <div class="chart-container">
          <div class="chart-header">
            <h4 class="chart-title">Agricultural GRDP Contribution</h4>
            <p class="chart-subtitle">Average 2018-2022 by subsector</p>
          </div>
          <div class="chart-wrapper">
            <canvas id="chart-grdp"></canvas>
          </div>
          <p class="chart-footnote">Source: BPS Lampung Utara</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Map Section -->
<section class="section-sm section-cream">
  <div class="container">
    <h2 class="text-center mb-md">Regional Map</h2>
    <div class="map-container">
      <div class="map-header">
        <h4 class="map-title">Lampung Utara Agricultural Zones</h4>
        <p class="map-subtitle">Indicative commodity production areas</p>
      </div>
      <div class="map-wrapper">
        <div id="map-lampung" class="map-canvas" 
             data-lat="-4.5" 
             data-lng="104.8" 
             data-zoom="9" 
             data-region="lampung-utara">
        </div>
      </div>
      <div class="map-legend">
        <div class="legend-item">
          <span class="legend-color" style="background-color: #2D5A27;"></span>
          <span class="legend-label">Food Crops Zone</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #8B6F47;"></span>
          <span class="legend-label">Plantation Zone</span>
        </div>
      </div>
      <p class="map-footnote">Note: Kecamatan-level boundaries require Bappeda GIS data for precise mapping.</p>
    </div>
  </div>
</section>

<!-- Why Lampung Utara -->
<section class="section-sm">
  <div class="container">
    <h2>Why Lampung Utara?</h2>
    
    <div class="grid grid-3">
      <div class="info-box info-box-primary">
        <div class="info-box-title">
          <i class="fas fa-map-marker-alt"></i>
          Strategic Location
        </div>
        <div class="info-box-content">
          Located in Sumatra with established agricultural infrastructure and access to domestic markets.
        </div>
      </div>
      
      <div class="info-box info-box-primary">
        <div class="info-box-title">
          <i class="fas fa-users"></i>
          Political Access
        </div>
        <div class="info-box-content">
          Established connections with former Bupati and provincial networks for government alignment.
        </div>
      </div>
      
      <div class="info-box info-box-primary">
        <div class="info-box-title">
          <i class="fas fa-check-double"></i>
          Confirmed Leadership
        </div>
        <div class="info-box-content">
          Leading commodities confirmed through LQ and Klassen analysis with strong market demand.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Priority Commodities -->
<section class="section-sm section-cream">
  <div class="container">
    <h2>Priority Commodities</h2>
    <p class="mb-lg">Based on climatic suitability, existing specialization, and market potential:</p>
    
    <div class="grid grid-5">
      <!-- Cassava -->
      {% include commodity-card.html 
        slug="cassava"
        icon="fas fa-wheat-awn"
        name="Cassava"
        local_name="Ubi Kayu"
        status="Leading"
        fit="Tolerant to variable rainfall and moderately poor soils"
        market="Strong domestic demand (starch, tapioca, feed) and growing export"
        yield="25-40 t/ha"
        roi="8-12 months"
        link="/lampung-utara/commodities/#cassava"
      %}
      
      <!-- Maize -->
      {% include commodity-card.html 
        slug="maize"
        icon="fas fa-seedling"
        name="Maize"
        local_name="Jagung"
        status="Leading"
        fit="Suitable to monsoonal climate, 3-4 month growing period"
        market="Strong domestic feed industry demand"
        yield="6-8 t/ha"
        roi="4-5 months"
        link="/lampung-utara/commodities/#maize"
      %}
      
      <!-- Peanuts -->
      {% include commodity-card.html 
        slug="peanuts"
        icon="fas fa-atom"
        name="Peanuts"
        local_name="Kacang Tanah"
        status="Priority"
        fit="Suited to light-medium soils, integrates with crop rotations"
        market="Domestic consumption and snack/food industry"
        yield="2-3 t/ha"
        roi="3-4 months"
        link="/lampung-utara/commodities/#peanuts"
      %}
      
      <!-- Coffee -->
      {% include commodity-card.html 
        slug="coffee"
        icon="fas fa-mug-hot"
        name="Robusta Coffee"
        local_name="Kopi Robusta"
        status="Leading"
        fit="Lampung is a national Robusta center with ideal climate"
        market="Strong export market, Lampung coffee branded"
        yield="1.0-1.5 t/ha"
        roi="3-4 years"
        link="/lampung-utara/commodities/#coffee"
      %}
      
      <!-- Pepper -->
      {% include commodity-card.html 
        slug="pepper"
        icon="fas fa-pepper-hot"
        name="Pepper"
        local_name="Lada"
        status="Leading"
        fit="Thrives in humid tropics with well-drained soils"
        market="Strong export orientation, recognized origin"
        yield="1.5-3 t/ha"
        roi="3-4 years"
        link="/lampung-utara/commodities/#pepper"
      %}
    </div>
    
    <div class="text-center mt-lg">
      <a href="{{ '/lampung-utara/commodities/' | relative_url }}" class="btn btn-primary">
        View All Commodities <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  </div>
</section>

<!-- Strategic Entry Points -->
<section class="section-sm">
  <div class="container">
    <h2>Strategic Entry Points</h2>
    
    <div class="grid grid-2">
      <div>
        <h3><i class="fas fa-map" style="color: #2D5A27;"></i> Land & Data</h3>
        <ol>
          <li>Obtain official letter from Bupati instructing Bappeda, Dinas Pertanian, and Dinas Perkebunan to share:
            <ul>
              <li>Peta penggunaan lahan (land-use map)</li>
              <li>Peta kesesuaian lahan (land-suitability map)</li>
              <li>Data komoditas per kecamatan</li>
            </ul>
          </li>
          <li>Request updated agro-climate and soil maps from BBSDLP/Balai agroklimat</li>
          <li>Commission rapid ground-tr survey in 2-3 focus kecamatan</li>
        </ol>
      </div>
      
      <div>
        <h3><i class="fas fa-handshake" style="color: #2D5A27;"></i> SKPD Alignment</h3>
        <ol>
          <li>Convene task force chaired by Sekda or Bappeda</li>
          <li>Agree on priority commodities with Dinas Pertanian & Perkebunan</li>
          <li>Map farmer groups ready for formalization</li>
          <li>Co-develop "Kawasan Sentra Komoditas Unggulan Lampung Utara" proposal</li>
        </ol>
      </div>
    </div>
    
    <div class="info-box info-box-warning mt-lg">
      <div class="info-box-title">
        <i class="fas fa-lightbulb"></i>
        Key Insight
      </div>
      <div class="info-box-content">
        <strong>Proposal Strategy:</strong> Structure in two tiers:
        <ol style="margin-top: 0.5rem;">
          <li><strong>Short-term (1-2 years):</strong> APBN proposals for input/Alsintan support for maize-cassava-peanut clusters</li>
          <li><strong>Medium-term (3-5 years):</strong> Integrated kawasan proposal combining food + estate crops as climate-resilient hub</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<!-- Key Risks -->
<section class="section-sm section-cream">
  <div class="container">
    <h2>Key Risks & Mitigations</h2>
    
    <div class="grid grid-2">
      <div class="card">
        <div class="card-body">
          <h4><i class="fas fa-exclamation-triangle" style="color: #DC3545;"></i> Land Tenure</h4>
          <p><strong>Risk:</strong> Overlaps between private titles, communal land, and kawasan hutan</p>
          <p><strong>Mitigation:</strong> Prioritize APL with clean titles; obtain formal clarification from BPN</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-body">
          <h4><i class="fas fa-clock" style="color: #FFC107;"></i> Bureaucratic Bottlenecks</h4>
          <p><strong>Risk:</strong> Slow decision-making between Dinas Pertanian, Perkebunan, and Bappeda</p>
          <p><strong>Mitigation:</strong> High-level steering committee; assign senior ASN as secretariat</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-body">
          <h4><i class="fas fa-chart-line" style="color: #FFC107;"></i> Price Volatility</h4>
          <p><strong>Risk:</strong> Coffee, pepper, maize, cassava price fluctuations</p>
          <p><strong>Mitigation:</strong> Mix short-cycle with long-cycle crops; lock in offtake MOUs</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-body">
          <h4><i class="fas fa-cloud-rain" style="color: #DC3545;"></i> Climate Risk</h4>
          <p><strong>Risk:</strong> Rainfall variability, longer dry seasons affecting yields</p>
          <p><strong>Mitigation:</strong> Use agro-climate maps; invest in water infrastructure; adopt drought-tolerant varieties</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section-sm">
  <div class="container text-center">
    <h2>Ready to Explore?</h2>
    <p class="mb-lg">Learn more about commodities and available programs</p>
    <div class="flex justify-center gap-md flex-wrap">
      <a href="{{ '/lampung-utara/commodities/' | relative_url }}" class="btn btn-primary btn-lg">
        <i class="fas fa-seedling"></i> View Commodities
      </a>
      <a href="{{ '/lampung-utara/programs/' | relative_url }}" class="btn btn-secondary btn-lg">
        <i class="fas fa-handshake"></i> View Programs
      </a>
    </div>
  </div>
</section>
