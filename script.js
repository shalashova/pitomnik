var acc = document.getElementsByClassName('question');



                    for ( var i = 0; i < acc.length; i++) {

                        acc[i].addEventListener("click", sw);

                    }
                    function sw() {

                            var panel = this.nextElementSibling;
                        var red=this.querySelector('.plus');
                            if (panel.style.display === "block") {
                                panel.style.display = "none";
                                red.innerHTML = "+";
                                red.classList.remove('clicked');
                            }
                            else {
                                panel.style.display = "block";
                                red.innerHTML = '-';
                                red.classList.add('clicked');
                            }

                        }
