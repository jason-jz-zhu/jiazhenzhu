import React, { Component } from 'react';
// import './Resource.css';

class CrimeAnalysis extends Component {
  render() {
    return (
      <div style={{ marginTop: 45 }}>
        <div className="tableauPlaceholder" style={{ width: 1004, height: 3569, margin: '0 auto' }}>
          <noscript>
            <a href="#">
              <img
                alt="Dashboard 1 "
                src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CR&#47;CRIMEANALYSISINSANFRANCISCO2014SUMMER&#47;Dashboard1&#47;1_rss.png"
                style={{ border: 'none' }}
              />
            </a>
          </noscript>
          <object className="tableauViz" width="1004" height="3569" style={{ display: 'none' }}>
            <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
            <param name="site_root" value="" />
            <param name="name" value="CRIMEANALYSISINSANFRANCISCO2014SUMMER&#47;Dashboard1" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param name="static_image" value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CR&#47;CRIMEANALYSISINSANFRANCISCO2014SUMMER&#47;Dashboard1&#47;1.png" />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="showTabs" value="y" />
          </object>
        </div>
      </div>
    );
  }
}

export default CrimeAnalysis;
