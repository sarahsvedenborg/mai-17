export type Song = {
  slug: string;
  title: string;
  credit: string;
  sourceUrl: string;
  sourceName: string;
  /** Tekstlinjer per strofe; linjeskift som i vanlig hymneforelegg der det hjelper sangen */
  verses: string[][];
};

/**
 * Tekstene er hentet fra kildene under (vises også på sangsidene).
 * «Ja, vi elsker» er her med strofene slik de ofte gjengis ved allsang (jf. NSS 755 / kirken.no-siden du lenket til).
 */

export const SONGS: Song[] = [
  {
    slug: "ja-vi-elsker",
    title: "Ja, vi elsker",
    credit: "Tekst: Bjørnstjerne Bjørnson (1859, 1869). Melodi: Rikard Nordraak (ca. 1864). Nos 755.",
    sourceUrl:
      "https://www.kirken.no/nb-NO/fellesrad/Bergen/menigheter/Soreide-menighet/virksomhetsomrader/musikk-i-kirken/ukens%20salme/21%20ukens%20salme%20755/",
    sourceName: "kirken.no (Søreide menighet)",
    verses: [
      [
        "1.",
        "Ja, vi elsker dette landet som det stiger frem,",
        "furet, værbitt over vannet, med de tusen hjem.",
        "Elsker, elsker det og tenker på vår far og mor",
        "og den saganatt som senker drømmer på vår jord.",
      ],
      [
        "2.",
        "Norske mann i hus og hytte, takk din store Gud!",
        "Landet ville han beskytte, skjønt det mørkt så ut.",
        "Alt hva fedrene har kjempet, mødrene har grett,",
        "har den Herre stille lempet, så vi vant vår rett.",
      ],
      [
        "3.",
        "Ja, vi elsker dette landet som det stiger frem,",
        "furet, værbitt over vannet med de tusen hjem.",
        "Og som fedres kamp har hevet det av nød til seir,",
        "også vi, når det blir krevet, for dets fred slår leir.",
      ],
    ],
  },
  {
    slug: "norge-i-rodt-hvitt-og-blatt",
    title: "Norge i rødt, hvitt og blått",
    credit:
      "Tekst: Finn Bø, Bias Bernhoft og Arild Feldborg (1941). Melodi: Lars-Erik Larsson.",
    sourceUrl: "https://www.barnesanger.no/norge-i-rodt-hvitt-og-blatt.html",
    sourceName: "barnesanger.no",
    verses: [
      [
        "Hvorhen du går i li og fjell, en vinterdag, en sommerkveld",
        "med fjord og fossevell,",
        "fra eng og mo med furutrær fra havets bryn med fiskevær",
        "og til de hvite skjær,",
        "møter du landet i trefarvet drakt,",
        "svøpt i et gjenskinn av flaggets farveprakt.",
      ],
      [
        "Se, en hvitstammet bjerk oppi heien,",
        "rammer stripen med blåklokker inn",
        "mot den rødmalte stuen ved veien,",
        "det er flagget som vaier i vind.",
        "Ja, så hvit som det hvite er sneen,",
        "og det røde har kveldssolen fått,",
        "og det blå ga sin farve til breen,",
        "det er Norge i rødt, hvitt og blått.",
      ],
      [
        "En vårdag i en solskinnsstund",
        "på benken i Studenterlund",
        "der sitter han og hun,",
        "to unge, nyutsprungne russ,",
        "to ganske nylig tente bluss,",
        "i 20 grader pluss.",
        "Hun er som en gryende forsommerdag",
        "som farves av gjenskinnet av det norske flagg.",
        "Ja, så hvit som det hvite er kjolen,",
        "og så rødt som det rø’ hennes kinn,",
        "hennes øyne er blå som fiolen,",
        "hun er flagget som vaier i vind.",
        "Han har freidig og hvitlugget panne,",
        "og en lue i rødt har han fått.",
        "Med en lyseblå tiltro til landet",
        "står vår ungdom i rødt, hvitt og blått.",
      ],
      [
        "De kjempet både hun og han!",
        "Nå lyser seirens baunebrann,",
        "utover Norges land.",
        "Mot himlen stiger flagg ved flagg",
        "som tusen gledesbål i dag,",
        "for alle vunne slag.",
        "Det knitrer som før over hytte og slott,",
        "et flammende merke i rødt og hvitt og blått.",
        "Som et regnbuens tegn under skyen,",
        "skal det evig i fremtiden stå.",
        "Se, det glitrer på ny over byen,",
        "i det røde og hvite og blå.",
      ],
      [
        "La det runge fra gaten og torget,",
        "over landet som nordmenn har fått:",
        "Du er vårt, du er vårt, gamle Norge!",
        "Vi vil kle deg i rødt, hvitt og blått!",
      ],
    ],
  },
];

export function getSongBySlug(slug: string): Song | undefined {
  return SONGS.find((s) => s.slug === slug);
}

export function getAllSongSlugs(): string[] {
  return SONGS.map((s) => s.slug);
}
