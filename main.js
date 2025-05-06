document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('dark');

  const ctx = document.getElementById('skillsChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Python', 'Swift', 'JavaScript', 'SQL', 'Cybersecurity', 'Cloud'],
      datasets: [{
        label: 'Skill Level',
        data: [70, 75, 85, 70, 60, 50],
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
            color: '#fff'
          }
        }
      }
    }
  });

  const techSkillsSection = document.querySelector('section h2');
  const techSkillText = document.querySelectorAll('section p, section ul li');
  techSkillsSection.style.color = '#fff';
  techSkillText.forEach(item => {
    item.style.color = '#fff';
  });
});