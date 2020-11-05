(function() {
	window.Main = {};
	Main.Page = (function() {
		var mosq = null;
		function Page() {
			var _this = this;
			mosq = new Mosquitto();

			$('#connect-button').click(function() {
				return _this.connect();
			});
			$('#disconnect-button').click(function() {
				return _this.disconnect();
			});
			$('#subscribe-button').click(function() {
				return _this.subscribe();
			});
			$('#unsubscribe-button').click(function() {
				return _this.unsubscribe();
			});
			
			//=======================================================joycon azul
			$('#avanca-output').click(function() {
				var payload = "L";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});

			
			$('#desliga-output').click(function() {
				var payload = "D";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});

			$('#gira-esquerda-output').click(function() {
				var payload = "A";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});

			$('#gira-direita-output').click(function() {
				var payload = "B";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});

			$('#recua').click(function() {
				var payload = "C";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});

			//==================================================== joycon vermelho

			$('#avanca-output-red').click(function() {
				var payload = "E";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});

			
			$('#desliga-output-red').click(function() {
				var payload = "F";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});

			$('#gira-esquerda-output-red').click(function() {
				var payload = "G";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});

			$('#gira-direita-output-red').click(function() {
				var payload = "H";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});

			$('#recua-red').click(function() {
				var payload = "I";  
				var TopicPublish = $('#pub-topic-text')[0].value;				
				mosq.publish(TopicPublish, payload, 0);
			});


//Eventos de teclado para controlar o joycon vermelho

window.addEventListener("keydown",function(e){
	e.preventDefault();
	if (e.keyCode === 40) {
        document.getElementById("recua-red").click();
    }
});

window.addEventListener("keyup",function(e){
	e.preventDefault();
	if (e.keyCode === 38) {
		document.getElementById("avanca-output-red").click();
	}
});

window.addEventListener("keyup",function(e){
	e.preventDefault();
	if (e.keyCode === 13) {
		document.getElementById("desliga-output-red").click();
	}
});

window.addEventListener("keyup",function(e){
	e.preventDefault();
	if (e.keyCode === 37) {
		document.getElementById("gira-esquerda-output-red").click();
	}
});

window.addEventListener("keyup",function(e){
	e.preventDefault();
	if (e.keyCode === 39) {
		document.getElementById("gira-direita-output-red").click();
	}
});

//Eventos de teclado para controlar o joycon azul

window.addEventListener("keyup",function(e){
	e.preventDefault();
	if (e.keyCode === 83) {
        document.getElementById("recua").click();
    }
});

window.addEventListener("keyup",function(e){
	e.preventDefault();
	if (e.keyCode === 87) {
		document.getElementById("avanca-output").click();
	}
});

window.addEventListener("keyup",function(e){
	e.preventDefault();
	if (e.keyCode === 32) {
		document.getElementById("desliga-output").click();
	}
});

window.addEventListener("keyup",function(e){
	e.preventDefault();
	if (e.keyCode === 65) {
		document.getElementById("gira-esquerda-output").click();
	}
});

window.addEventListener("keyup",function(e){
	e.preventDefault();
	if (e.keyCode === 68) {
		document.getElementById("gira-direita-output").click();
	}
});






			

			mosq.onconnect = function(rc){
				var p = document.createElement("p");
				var topic = $('#pub-subscribe-text')[0].value;

				p.innerHTML = "CONECTADO AO BROKER!";
				$("#debug").append(p);
				mosq.subscribe(topic, 0);
				p.style.cssText = "color: 		blue; font-family: 'Roboto', sans-serif; "

				var jogar = document.getElementById("jogar");
				jogar.innerHTML = "CLIQUE PARA JOGAR";
				 jogar.setAttribute('href', '#main');
				 
				 var butJogar = document.getElementById("botao-jogar");
				 butJogar.style.cssText = "background-color: 	; box-shadow: 0 5px #4E878C; cursor: pointer; background: linear-gradient(90deg, 	#93E5AB -10%,#4E878C 90%); border-radius: 40px;"

				 var a = document.querySelector("a");
				 a.style.cssText = "cursor: pointer;"
				
				 mosq.ondisconnect = function(rc){
					var q = document.createElement("p");
					var url = "ws://broker.hivemq.com/ws";
					
					q.innerHTML = "A CONEXÃO COM O BROKER FOI PERDIDA";
					$("#debug").append(q);				
					mosq.connect(url);
					q.style.cssText = "color: 	red; font-family: 'Roboto', sans-serif;"
	
					jogar.innerHTML = "VOCÊ NÃO ESTÁ CONECTADO";
					var butJogar = document.getElementById("botao-jogar");
					 jogar.style.display = "none";
					 butJogar.style.display = "none";
					 p.style.display = "none";
					
					 
					
				};
				 

			};
			
			mosq.onmessage = function(topic, payload, qos){
				var p = document.createElement("p");
				var acao = payload[0];
				
				//escreve o estado do output conforme informação recebida
				if (acao == 'L')
					p.innerHTML = "<center><img src='ligado.png'></center>"
				else
					p.innerHTML = "<center><img src='desligado.png'></center>"
				
				$("#status_io").html(p);
			};
		}
		Page.prototype.connect = function(){
			var url = "ws://mqtt.eclipse.org/mqtt";
			mosq.connect(url);
		};
		Page.prototype.disconnect = function(){
			mosq.disconnect();
		};
		Page.prototype.subscribe = function(){
			var topic = $('#sub-topic-text')[0].value;
			mosq.subscribe(topic, 0);
		};
		Page.prototype.unsubscribe = function(){
			var topic = $('#sub-topic-text')[0].value;
			mosq.unsubscribe(topic);
		};
		
		return Page;
	})();
	$(function(){
		return Main.controller = new Main.Page;
	});
}).call(this);


