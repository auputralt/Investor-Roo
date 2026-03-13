---
layout: region
title: "Maluku Overview"
subtitle: "Archipelagic Bioeconomy & Spice Hub"
region: "Maluku"
region_slug: "maluku"
region_url: "/maluku/"
commodities_url: "/maluku/commodities/"
programs_url: "/maluku/programs/"
show_quick_nav: true
active_tab: "overview"
permalink: /maluku/
---

<!-- Regional Profile -->
<section class="section-sm">
  <div class="container">
    <div class="grid grid-2">
      <div>
        <h2>Regional Profile</h2>
        
        <h3>Agro-Ecology</h3>
        <ul>
          <li><strong>Geography:</strong> Archipelagic province with mix of coastal lowlands and hilly interiors <span class="data-status confirmed">Confirmed</span></li>
          <li><strong>Climate:</strong> Humid tropical with significant rainfall</li>
          <li><strong>Soils:</strong> Relatively acidic in many parts, suitable for spice crops <span class="data-status assumption">Assumption</span></li>
        </ul>
        
        <h3>Economic Base</h3>
        <p>Agriculture, forestry, and fisheries are core pillars of the Maluku economy, with agriculture carrying vital functions due to abundant natural resources. <span class="data-status confirmed">Confirmed</span></p>
        
        <h3>Promising Sub-Regions</h3>
        <ul>
          <li><strong>Maluku Tengah:</strong> Evidence of active Kementan assistance (seeds, equipment, irrigation) <span class="data-status confirmed">Confirmed</span></li>
          <li><strong>Seram and surrounding islands:</strong> Significant sago, coconut, and maize-rice intercropping potential</li>
        </ul>
        
        <div class="info-box info-box-primary mt-lg">
          <div class="info-box-title">
            <i class="fas fa-lightbulb"></i>
            Recommendation
          </div>
          <div class="info-box-content">
            Anchor initial proposal in <strong>Maluku Tengah</strong> where Dinas Pertanian is already accustomed to managing Kementan assistance.
          </div>
        </div>
      </div>
      
      <div>
        <!-- Production Growth Chart -->
        <div class="chart-container">
          <div class="chart-header">
            <h4 class="chart-title">Commodity Production Growth</h4>
            <p class="chart-subtitle">Index: 2020 = 100</p>
          </div>
          <div class="chart-wrapper">
            <canvas id="chart-production-growth"></canvas>
          </div>
          <p class="chart-footnote">Source: BPS Maluku, 2020-2024</p>
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
        <h4 class="map-title">Maluku Archipelago Agricultural Zones</h4>
        <p class="map-subtitle">Key production areas and commodity zones</p>
      </div>
      <div class="map-wrapper">
        <div id="map-maluku" class="map-canvas" 
             data-lat="-3.0" 
             data-lng="129.0" 
             data-zoom="7" 
             data-region="maluku">
        </div>
      </div>
      <div class="map-legend">
        <div class="legend-item">
          <span class="legend-color" style="background-color: #1E5F8A;"></span>
          <span class="legend-label">Spice Production</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #D4A84B;"></span>
          <span class="legend-label">Food Security</span>
        </div>
      </div>
      <p class="map-footnote">Note: Detailed kabupaten boundaries require Bappeda GIS data.</p>
    </div>
  </div>
</section>

<!-- Why Maluku -->
<section class="section-sm">
  <div class="container">
    <h2>Why Maluku?</h2>
    
    <div class="grid grid-3">
      <div class="info-box info-box-primary">
        <div class="info-box-title">
          <i class="fas fa-history"></i>
          Heritage Spices
        </div>
        <div class="info-box-content">
          Historic and current center for nutmeg, cloves, and other spices with recognized global origin branding.
        </div>
      </div>
      
      <div class="info-box info-box-primary">
        <div class="info-box-title">
          <i class="fas fa-flask"></i>
          Bioeconomy Potential
        </div>
        <div class="info-box-content">
          Strong value-addition opportunities through processing (nutmeg oil, clove oil, VCO) with significant income gains.
        </div>
      </div>
      
      <div class="info-box info-box-primary">
        <div class="info-box-title">
          <i class="fas fa-hands-helping"></i>
          Growing Support
        </div>
        <div class="info-box-content">
          Maluku Tengah recently received large Kementan packages, indicating institutional readiness and absorption capacity.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Priority Commodities -->
<section class="section-sm section-cream">
  <div class="container">
    <h2>Priority Commodities</h2>
    <p class="mb-lg">Based on historical significance, current growth, and bioeconomy potential:</p>
    
    <div class="grid grid-5">
      <!-- Nutmeg -->
      {% include commodity-card.html 
        slug="nutmeg"
        icon="fas fa-seedling"
        name="Nutmeg"
        local_name="Pala"
        status="Leading"
        fit="Performs well in humid tropical conditions"
        market="Strong export demand for whole nutmeg and derivatives"
        yield="Several hundred kg/ha"
        roi="5-7 years"
        link="/maluku/commodities/#nutmeg"
      %}
      
      <!-- Cloves -->
      {% include commodity-card.html 
        slug="cloves"
        icon="fas fa-spa"
        name="Cloves"
        local_name="Cengkeh"
        status="Leading"
        fit="Demands humid climate with pronounced dry season"
        market="High-value spice with strong global prices"
        yield="0.5-1.0 t/ha"
        roi="4-7 years"
        link="/maluku/commodities/#cloves"
      %}
      
      <!-- Coconut -->
      {% include commodity-card.html 
        slug="coconut"
        icon="fas fa-tree"
        name="Coconut"
        local_name="Kelapa"
        status="Leading"
        fit="Suited to coastal zones and atoll environments"
        market="Strong domestic demand and export for VCO"
        yield="8,000-10,000 nuts/ha"
        roi="5+ years"
        link="/maluku/commodities/#coconut"
      %}
      
      <!-- Sago -->
      {% include commodity-card.html 
        slug="sago"
        icon="fas fa-water"
        name="Sago"
        local_name="Sagu"
        status="Key Staple"
        fit="Thrives in swampy/wetland areas"
        market="Local food security with emerging industrial uses"
        yield="High starch yield"
        roi="Medium-term"
        link="/maluku/commodities/#sago"
      %}
      
      <!-- Maize + Rice -->
      {% include commodity-card.html 
        slug="maize-rice"
        icon="fas fa-wheat-awn"
        name="Maize + Rice"
        local_name="Jagung + Padi Gogo"
        status="Demonstrated"
        fit="Dryland intercropping with LER 2.11-2.45"
        market="Local food needs + national maize demand"
        yield="LER 111-145% gain"
        roi="4-5 months"
        link="/maluku/commodities/#maize-rice"
      %}
    </div>
    
    <div class="text-center mt-lg">
      <a href="{{ '/maluku/commodities/' | relative_url }}" class="btn btn-primary" style="background-color: #1E5F8A;">
        View All Commodities <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  </div>
</section>

<!-- LER Chart -->
<section class="section-sm">
  <div class="container">
    <h2>Intercropping Advantage</h2>
    <p class="mb-lg">Maize + Upland Rice intercropping trials in Maluku demonstrate significant productivity gains:</p>
    
    <div class="chart-container">
      <div class="chart-header">
        <h4 class="chart-title">Land Equivalent Ratio (LER) Comparison</h4>
        <p class="chart-subtitle">Intercropping vs Monoculture productivity</p>
      </div>
      <div class="chart-wrapper">
        <canvas id="chart-ler"></canvas>
      </div>
      <p class="chart-footnote">Source: Maluku intercropping trials with Inpago 11, Inpago 12, Rindang 1, Rindang 2 varieties</p>
    </div>
    
    <div class="info-box info-box-primary mt-lg">
      <div class="info-box-title">
        <i class="fas fa-chart-line"></i>
        Key Finding
      </div>
      <div class="info-box-content">
        Intercropping maize with upland rice achieves <strong>LER of 2.11-2.45</strong>, meaning <strong>111-145% higher productivity</strong> compared to monoculture on the same land area. This is highly compatible with Kementan's maize and rice programs.
      </div>
    </div>
  </div>
</section>

<!-- Strategic Entry Points -->
<section class="section-sm section-cream">
  <div class="container">
    <h2>Strategic Entry Points</h2>
    
    <div class="grid grid-2">
      <div>
        <h3><i class="fas fa-map-marker-alt" style="color: #1E5F8A;"></i> Kabupaten Focus</h3>
        <ol>
          <li>Choose <strong>Maluku Tengah</strong> as anchor kabupaten (proven Kementan absorption)</li>
          <li>Via Governor and Bupati, request:
            <ul>
              <li>Land use and commodity distribution data</li>
              <li>Existing sago/nutmeg/clove/coconut zones</li>
              <li>Dryland maize-rice areas</li>
            </ul>
          </li>
          <li>Commission feasibility study on 2-3 commodities in defined kawasan</li>
        </ol>
      </div>
      
      <div>
        <h3><i class="fas fa-handshake" style="color: #1E5F8A;"></i> SKPD Alignment</h3>
        <ol>
          <li>Create joint working group with Dinas Pertanian, Perkebunan, Perindustrian/Perdagangan, and Bappeda</li>
          <li>Agree on priority commodities 2025-2030</li>
          <li>Map farmer groups and cooperatives already engaged</li>
          <li>Frame as <strong>flagship provincial initiatives</strong> aligned with national narratives</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<!-- Key Risks -->
<section class="section-sm">
  <div class="container">
    <h2>Key Risks & Mitigations</h2>
    
    <div class="grid grid-2">
      <div class="card">
        <div class="card-body">
          <h4><i class="fas fa-gavel" style="color: #DC3545;"></i> Customary Land Rights</h4>
          <p><strong>Risk:</strong> Many lands under adat (customary) arrangements; misalignment with formal titles</p>
          <p><strong>Mitigation:</strong> Engage traditional leaders early; secure written agreements with benefit-sharing</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-body">
          <h4><i class="fas fa-ship" style="color: #FFC107;"></i> Logistics & Fragmentation</h4>
          <p><strong>Risk:</strong> High transport costs and fragmented small islands reduce economies of scale</p>
          <p><strong>Mitigation:</strong> Cluster-based value chains on individual islands; focus on high value-to-weight commodities</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-body">
          <h4><i class="fas fa-cloud-showers-heavy" style="color: #DC3545;"></i> Climate & Disaster</h4>
          <p><strong>Risk:</strong> High rainfall and storm exposure affect tree crops and coastal agriculture</p>
          <p><strong>Mitigation:</strong> Diversify commodities and elevations; invest in windbreaks and drainage</p>
        </div>
      </div>
      
      <div class="card">
        <div class="card-body">
          <h4><i class="fas fa-user-tie" style="color: #FFC107;"></i> Institutional Capacity</h4>
          <p><strong>Risk:</strong> Some kabupaten SKPD have limited technical and administrative capacity</p>
          <p><strong>Mitigation:</strong> Co-fund technical assistance; ensure proposals are simple and modular</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section-sm section-cream">
  <div class="container text-center">
    <h2>Ready to Explore?</h2>
    <p class="mb-lg">Learn more about commodities and available programs</p>
    <div class="flex justify-center gap-md flex-wrap">
      <a href="{{ '/maluku/commodities/' | relative_url }}" class="btn btn-primary btn-lg" style="background-color: #1E5F8A;">
        <i class="fas fa-seedling"></i> View Commodities
      </a>
      <a href="{{ '/maluku/programs/' | relative_url }}" class="btn btn-secondary btn-lg">
        <i class="fas fa-handshake"></i> View Programs
      </a>
    </div>
  </div>
</section>
