export default function BlogPageFull() {
  return (
    <div className="pt-14 flex flex-col justify-center items-center ">
      <div className="text-4xl font-bold text-left mb-5 mt-2">
        This is a fake title v
      </div>
      <div className="max-w-5xl w-full text-left my-2">
        <i>
          Written by{" "}
          <a href="" className="text-indigo-400">
            Lauren
          </a>
          <br></br>
          <div>Rating *****</div>
        </i>
      </div>
      <p className="text-left max-w-5xl mb-5">
        By the time you read this, the Taliban may already be in Kabul. If not
        now, then soon. Nixon wanted — and got — his decent interval between the
        United States pullout of Vietnam and the inevitable North Vietnamese
        takeover. Afghanistan’s interval was never going to be decent, but I
        confess I expected an interval. We’re scrambling to leave in time, we’re
        racing for the helicopters as the Taliban burns through Afghanistan like
        a forest fire. I remember Afghanistan well. I deployed there twice —
        once in 2008, and again in 2009–2010. It was already obvious that the
        Taliban would sweep through the very instant we left. And here we are
        today. I know how bad the Taliban is. I know what they do to women and
        little boys. I know what they’re going to do to the interpreters and the
        people who cooperated with us, it’s awful, it’s bad, but we are leaving,
        and all I feel is grim relief. This is what I remember: I remember
        Afghanistan as a dusty beige nightmare of a place full of proud, brave
        people who did not fucking want us there. We called them Hajjis and
        worse and they were better than we were, braver and stronger and
        smarter. I remember going through the phones of the people we detained
        and finding clip after clip of Bollywood musicals, women singing in
        fields of flowers. Rarely did I find anything incriminating. I remember
        finding propaganda footage cut together from the Soviet invasion and our
        own Operation Enduring Whatever.
        <br></br>I remember laughing about how stupid the Afghans were to not
        know we aren’t the Russians and then, eventually, realizing that I was
        the stupid one. I remember how every year the US would have to decide
        how to deal with the opium fields. There were a few options. You could
        leave the fields alone, and then the Taliban would shake the farmers
        down and use the money to buy weapons. Or, you could carpet bomb the
        fields, and then the farmers would join the Taliban for reasons that, to
        me, seem obvious.<br></br> The third option, and the one we went for
        while I was there, was to give the farmers fertilizer as an incentive to
        grow wheat instead of opium poppy. The farmers then sold the fertilizer
        to the Taliban, who used it to make explosives for IEDs that could
        destroy a million dollar MRAP and maim everyone inside. I remember we
        weren’t allowed to throw batteries away because people who worked on
        base would go through the trash and collect hundreds of dead batteries,
        wire them together so they had just enough juice for one charge, and use
        that charge to detonate an IED.
      </p>

      <div className="my-1 text-left w-full max-w-5xl">
        <div>By AAAA</div>
        <br></br>
        Comment 1 Comment 1 Comment 1 Comment 1 Comment 1 Comment 1
      </div>
      <div className="my-1 text-left w-full max-w-5xl">
        Comment 1 Comment 1 Comment 1 Comment 1 Comment 1 Comment 1
      </div>

      <form className="text-left max-w-5xl mb-5">
        <input
          name="comment"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Enter your comment"
        />{" "}
      </form>
    </div>
  );
}
