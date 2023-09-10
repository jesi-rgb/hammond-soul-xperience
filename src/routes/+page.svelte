<script>
	import Page from '../lib/Components/Page.svelte';
	import ScrollingTitle from '../lib/Components/ScrollingTitle.svelte';
	import Subtitle from '../lib/Components/Subtitle.svelte';
	import Title from '../lib/Components/Title.svelte';
</script>

<Page>
	<ScrollingTitle slot="title" />
	<Subtitle slot="subtitle">
		<p class="w-1/3 mx-auto">
			Hammond Soul Xperience (HSX) es una banda formada por músicos que se conocieron sobre el
			escenario, participando en las jam sessions organizadas por la asociación Jaén Jazzy.
		</p>
	</Subtitle>
</Page>

<Page>
	<Title slot="title">
		<div class="text-right mr-10">Biografía</div>
	</Title>
	<Subtitle slot="subtitle">
		<p class="text-right mr-10 w-1/3 inline-block">
			Aunque con historias personales y musicales dispares, los miembros de HSX comparten un
			desproporcionado, interés por la música de raíces afroamericanas que orbitan alrededor del
			<span class="font-bold">jazz-funk</span>, pero que también se envuelven de soul e incluso la
			bossa nova.
			<br /><br /> Una mezcla explosiva con toques añejos que se decora con retoques contemporáneos
			y, muchas veces, bailables. El repertorio de la banda incluye reinterpretaciones de temas
			clásicos y contemporáneos, además de algunos temas propios. <br /><br /> Su sonido se caracteriza
			por vigorosas bases rítmicas y líneas de bajo, guitarras que destilan groove, y la textura sonora
			inconfundible del órgano Hammond. La banda suele contar en sus directos con exquisitas colaboraciones
			vocales e instrumentales.
		</p>
	</Subtitle>
</Page>

<Page>
	<Title slot="title">yeah</Title>
	<Subtitle slot="subtitle">mierda</Subtitle>
</Page>
