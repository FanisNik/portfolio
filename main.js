document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
  
    const isStoredDark = localStorage.getItem('theme') === 'dark';
    if (isStoredDark) {
      document.body.classList.add('dark');
    }
  
    toggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateChartTheme(); 
      updateTextColors(); 
    });
  
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Python', 'Swift', 'JavaScript', 'SQL', 'Cybersecurity', 'Cloud'],
        datasets: [{
          label: 'Skill Level',
          data: [90, 75, 65, 70, 60, 50],
          backgroundColor: [
            '#554a42',
            '#9d9995',
            '#EBE6DC',
            '#34506B',
            '#232122',
            '#5c5955'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: document.body.classList.contains('dark') ? '#fff' : '#000'
            }
          }
        }
      }
    });
  
    function updateChartTheme() {
      chart.options.plugins.legend.labels.color = document.body.classList.contains('dark') ? '#fff' : '#000';
      chart.update();
    }
  
    const techSkillsSection = document.querySelector('section h2');
    const techSkillText = document.querySelectorAll('section p, section ul li');
  
    function updateTextColors() {
      const textColor = document.body.classList.contains('dark') ? '#fff' : '#000';
      techSkillsSection.style.color = textColor;
      techSkillText.forEach(item => {
        item.style.color = textColor;
      });
    }
  
    updateTextColors(); 
  
    toggle.addEventListener('click', () => {
      updateTextColors();
    });
  });