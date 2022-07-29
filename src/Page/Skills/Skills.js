import React from 'react'
import "../../Component/Css/Skills.css"

export const Skills = () => {
  return (
    <div>
        <section class="pb-5 skill">
		<div class="container-fluid">
			
			<div class="row text-center">
				<div class="col m-4">
					<h3 class="display-4"> Skills</h3>
					<div class="underline mb-4"></div>
					
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-3 text-center">
					<i class="fas fa-code fa-3x iconcolor mb-4"></i>
					<h5 class="mb-3 tchnology"> Programming Languages</h5>
					<p class="text-muted">JavaScript (ES6) | HTML |
CSS/Sass </p>
				</div>
				<div class="col-md-3 text-center">
					<i class="fas fa-crop fa-3x iconcolor mb-4"></i>
					<h5 class=" mb-3 tchnology"> Libraries & Frameworks</h5>
					<p class="text-muted"> React | Node.js | Bootstrap 4 </p>
				</div>
				<div class="col-md-3 text-center">
					<i class="fas fa-database fa-3x iconcolor mb-4"></i>
					<h5 class=" mb-3 tchnology"> Databases</h5>
					<p class="text-muted"> SQL | mangodb | NoSQL</p>
				</div>
                <div class="col-md-3 text-center">
					<i class="fas fa-tools fa-3x iconcolor mb-4"></i>
               
					<h5 class=" mb-3 tchnology">Tools & Platforms</h5>
					<p class="text-muted">Git | Heroku | Wordpress</p>
				</div>
				
			</div>
		</div>
	</section>
    </div>
  )
}
