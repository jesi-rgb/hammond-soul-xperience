<script>
	import Components from '../lib/Components/Components.svelte';
	import Page from '../lib/Components/Page.svelte';
	import ScrollingTitle from '../lib/Components/ScrollingTitle.svelte';
	import Subtitle from '../lib/Components/Subtitle.svelte';
	import Title from '../lib/Components/Title.svelte';
</script>

<Page>
	<ScrollingTitle slot="title" />
	<Subtitle slot="subtitle">
		<p class="w-[80%] md:text-2xl ml-5 xl:w-1/3 xl:ml-32">
			<span class="font-bold">Hammond Soul Xperience (HSX)</span> es una banda formada por músicos
			que se conocieron sobre el escenario, participando en las jam sessions organizadas por la
			asociación <span class="font-bold">Jaén Jazzy</span>.
		</p>
	</Subtitle>
</Page>

<Page>
	<Title slot="title">
		<div class="ml-5 xl:text-right xl:mr-32">BIOGRAFÍA</div>
	</Title>
	<Subtitle slot="subtitle">
		<div class="xl:grid xl:justify-stretch xl:text-2xl">
			<p class="xl:text-right xl:justify-self-end xl:w-[40%] w-[80%] xl:mr-32 ml-5">
				Aunque con historias personales y musicales dispares, los miembros de HSX comparten un
				desproporcionado, interés por la música de raíces afroamericanas que orbitan alrededor del
				<span class="font-bold">jazz-funk</span>, pero que también se envuelven de soul e incluso la
				bossa nova.
				<br /><br /> Una mezcla explosiva con toques añejos que se decora con retoques
				contemporáneos y, muchas veces, bailables. El repertorio de la banda incluye
				reinterpretaciones de temas clásicos y contemporáneos, además de algunos temas propios.
				<br /><br /> Su sonido se caracteriza por vigorosas bases rítmicas y líneas de bajo, guitarras
				que destilan groove, y la textura sonora inconfundible del órgano Hammond. La banda suele contar
				en sus directos con exquisitas colaboraciones vocales e instrumentales.
			</p>
		</div>
	</Subtitle>
</Page>

<Page>
	<Title slot="title">
		<div class="ml-5">COMPONENTES</div>
	</Title>
	<Subtitle slot="subtitle">
		<Components />
	</Subtitle>
</Page>
